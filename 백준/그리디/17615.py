import sys

sys.stdin = open("../input.txt", "r")

N = int(sys.stdin.readline())
balls = sys.stdin.readline().rstrip()


def solution(N, balls):
    count1 = min(balls.rstrip("R").count("R"), balls.rstrip("R").count("B"))
    count2 = min(balls.rstrip("B").count("B"), balls.rstrip("B").count("R"))
    count3 = min(balls.lstrip("R").count("R"), balls.lstrip("R").count("B"))
    count4 = min(balls.lstrip("B").count("B"), balls.lstrip("B").count("R"))

    return min(count1, count2, count3, count4)


print(solution(N, balls))
