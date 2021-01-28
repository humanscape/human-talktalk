export function compareMember(left: Member, right: Member) {
  const nameCompareResult = left.name.localeCompare(right.name);
  if (nameCompareResult !== 0) {
    return nameCompareResult;
  }
  return left.id.localeCompare(right.id);
}
