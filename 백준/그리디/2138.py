import sys

sys.stdin = open("../input.txt", "r")

N = int(sys.stdin.readline().rstrip())
before = list(map(int, sys.stdin.readline().rstrip()))
after = list(map(int, sys.stdin.readline().rstrip()))


def solution(N, before, after):
    count = 0
    tempBefore = before[:]
    answer = []

    for num in range(1, N):
        if before[num - 1] != after[num - 1]:
            before[num - 1] = 1 - before[num - 1]
            before[num] = 1 - before[num]
            if num != N - 1:
                before[num + 1] = 1 - before[num + 1]

            count += 1

    if before == after:
        answer.append(count)

    tempBefore[0] = 1 - tempBefore[0]
    tempBefore[1] = 1 - tempBefore[1]
    count2 = 1
    for num in range(1, N):
        if tempBefore[num - 1] != after[num - 1]:
            tempBefore[num - 1] = 1 - tempBefore[num - 1]
            tempBefore[num] = 1 - tempBefore[num]
            if num != N - 1:
                tempBefore[num + 1] = 1 - tempBefore[num + 1]

            count2 += 1

    if tempBefore == after:
        answer.append(count2)

    if answer:
        return min(answer)
    return -1


print(solution(N, before, after))
