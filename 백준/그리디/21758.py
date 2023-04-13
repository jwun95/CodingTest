import sys

sys.stdin = open("../input.txt", "r")

N = int(sys.stdin.readline())
honeys = list(map(int, input().split()))


def solution(N, honeys):
    answer = []
    # 벌벌꿀
    current = sum(honeys[2:]) * 2
    benefit = current
    for h in range(2, N - 1):
        current = current + honeys[h - 1] - honeys[h] * 2
        benefit = max(benefit, current)

    answer.append(benefit)
    # 꿀벌벌
    honeys.reverse()
    current = sum(honeys[2:]) * 2
    benefit = current
    for h in range(2, N - 1):
        current = current + honeys[h - 1] - honeys[h] * 2
        benefit = max(benefit, current)
    answer.append(benefit)

    # 벌꿀벌
    benefit = max(honeys[1:-1]) + sum(honeys[1:-1])
    answer.append(benefit)

    return max(answer)


print(solution(N, honeys))
