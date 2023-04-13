import sys
from heapq import heappush, heappushpop

sys.stdin = open("../input.txt", "r")

N = int(sys.stdin.readline().rstrip())

datas = []

for _ in range(N):
    a, b = map(int, sys.stdin.readline().split())
    datas.append([a, b])


def solution(N, datas):
    datas.sort(key=lambda x: (x[0], x[1]))

    rooms = [datas[0][1]]

    for d in range(1, N):
        if datas[d][0] >= rooms[0]:
            heappushpop(rooms, datas[d][1])

        else:
            heappush(rooms, datas[d][1])

    return len(rooms)


print(solution(N, datas))
