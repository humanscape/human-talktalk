import { nanoid } from 'nanoid';

export function mapToResult(rouletted: Member[][]): Result {
  return {
    id: nanoid(),
    createdAt: Date.now(),
    payload: rouletted.map((members, i) => ({
      groupName: `그룹 ${i + 1}`,
      members,
    })),
  };
}
