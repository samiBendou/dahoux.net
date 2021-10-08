import { getDate } from "./date";
import { joinTags, splitTags } from "./tags";
import Cookies from "js-cookie";

class FetchError extends Error {
  constructor(status, text, ...args) {
    super(args);
    this.status = status;
    this.message = text || args.message;
  }
}

export const joinTimeline = (data) => [...data.items.projects, ...data.items.experience, ...data.items.education];

export const cloneData = (data) => {
  return JSON.parse(JSON.stringify(data));
};

export const getAuthorizationHeader = () => {
  let token = Cookies.get("Authorization");
  if (!token) {
    return undefined;
  }
  return `Bearer ${token}`;
};

export const preprocessData = (data) => {
  delete data._id;
  data.birthday = getDate(data.birthday);
  joinTimeline(data).forEach((item) => {
    item.tags = joinTags(item.tags);
    item.start = getDate(item.start);
    item.end = getDate(item.end);
  });
  return data;
};

export const postprocessData = (data) => {
  joinTimeline(data).forEach((item) => {
    item.tags = splitTags(item.tags);
    if (item.category !== undefined) {
      item.category = parseInt(item.category);
    }
    if (item.location && (!item.location.zip || !item.location.country)) {
      delete item.location;
    }
  });
  data.items.skills.forEach((item) => {
    item.level = parseInt(item.level);
    item.category = parseInt(item.category);
  });
  return data;
};

export const getData = async (user) => {
  try {
    const res = await fetch(`/api/portfolio/${user}`);
    const text = await res.text();
    if (res.status !== 200) {
      return Promise.reject(new FetchError(res.status, text));
    }
    return Promise.resolve(JSON.parse(text));
  } catch (error) {
    return Promise.reject(error);
  }
};

export const postData = async (data) => {
  return await fetch("/api/admin/edit", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: getAuthorizationHeader(),
    },
    body: JSON.stringify(data),
  });
};

export const postAuthentication = async () => {
  return await fetch("/api/admin/auth", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: getAuthorizationHeader(),
    },
  });
};

export const postCredentials = async (credentials) => {
  return await fetch("/api/admin/login", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};

export const checkAuthentication = async () => {
  const res = await postAuthentication();
  if (res.status !== 200) {
    const text = await res.text();
    throw new FetchError(res.status, text);
  }
};

export const submitCredentials = async (credentials, actions) => {
  try {
    const res = await postCredentials(credentials);
    const text = await res.text();
    if (res.status !== 200) {
      throw new FetchError(res.status, text);
    }
    Cookies.set("Authorization", `${text}`);
    window.location.href = "/edit";
  } catch (error) {
    console.error(error);
  }
  actions.setSubmitting(false);
};

export const submitData = async (data, actions) => {
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
};
