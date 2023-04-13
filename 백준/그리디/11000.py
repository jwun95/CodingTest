import sys
from heapq import heappush, heappop

sys.stdin = open("../input.txt", "r")

N = int(sys.stdin.readline().rstrip())

datas = []

for _ in range(N):
    datas.append([int(v) for v in list(sys.stdin.readline().split())])


def solution(N, datas):
    datas.sort(key=lambda x: (x[0], x[1]))

    classroom = []
    heappush(classroom, datas[0][1])
    count = 1

    for i in range(1, N):
        if datas[i][0] >= classroom[0]:
            heappop(classroom)
            heappush(classroom, datas[i][1])

        else:
            heappush(classroom, datas[i][1])

    return len(classroom)


print(solution(N, datas))
