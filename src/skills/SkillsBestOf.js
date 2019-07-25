import SkillsList from './SkillsList';

export default class SkillsBestOf extends SkillsList {
    render() {
        const sortedItems = this.props.items.slice().sort((a, b) => a.level - b.level).slice(-1);
        return this.renderListWithItems(sortedItems);
    }
}