import sys

sys.stdin = open("../input.txt", "r")

N, M = map(int, sys.stdin.readline().split())
datas = list(map(int, input().split()))


def solution(N, M, datas):
    if N == 1:
        return 0

    gaps = []
    for i in range(1, N):
        gaps.append(datas[i] - datas[i - 1])

    gaps.sort()

    for k in range(M - 1):
        gaps.pop()

    return sum(gaps)


print(solution(N, M, datas))
