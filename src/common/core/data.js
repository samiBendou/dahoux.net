import { getDate } from "./date";
import { joinTags, splitTags } from "./tags";

export function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

export function preprocessData(data) {
  delete data._id;
  data.birthday = getDate(data.birthday);
  [...data.items.portfolio, ...data.items.timeline].forEach((item) => {
    item.tags = joinTags(item.tags);
    item.start = getDate(item.start);
    item.end = getDate(item.end);
  });
  return data;
}

export function postprocessData(data) {
  [...data.items.portfolio, ...data.items.timeline].forEach((item) => {
    item.tags = splitTags(item.tags);
    if (item.category !== undefined) {
      item.category = parseInt(item.category);
    }
  });
  data.items.skills.forEach((item) => {
    item.level = parseInt(item.level);
    item.category = parseInt(item.category);
  });
  return data;
}

export async function getData(user) {
  try {
    const res = await fetch(`/api/portfolio/${user}`);
    const text = await res.text();
    if (res.status !== 200) {
      throw Promise.reject(new Error(`${res.status} - ${text}`));
    }
    return Promise.resolve(JSON.parse(text));
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function postData(data) {
  return await fetch("/api/admin/edit", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function submitData(data, actions) {
  if (!window.confirm("Are you sure you want to send the modifications ?")) {
    return;
  }

  data = postprocessData(cloneData(data));

  try {
    const res = await postData(data);
    if (res.status !== 200) {
      const text = await res.text();
      throw new Error(`${res.status} - ${text}`);
    }
    window.alert("Modifications successfully sent!");
  } catch (error) {
    console.error(error);
    window.alert("An error has occurred");
  }
  actions.setSubmitting(false);
}
