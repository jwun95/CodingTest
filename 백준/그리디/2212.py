import sys

sys.stdin = open("../input.txt", "r")

N = int(sys.stdin.readline().rstrip())
K = int(sys.stdin.readline().rstrip())

datas = list(map(int, input().split()))


def solution(N, K, datas):
    if N == 1:
        return 0

    datas.sort()

    if K == 1:
        return datas[-1] - datas[0]

    gaps = []

    for i in range(1, N):
        gaps.append(datas[i] - datas[i - 1])

    gaps.sort()

    return sum(gaps[: -K + 1])


print(solution(N, K, datas))
