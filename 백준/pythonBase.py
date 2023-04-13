import sys

sys.stdin = open("../input.txt", "r")

N = int(sys.stdin.readline().rstrip())
data = sys.stdin.readline().rstrip()
N, M = map(int, sys.stdin.readline().split())
datas = []
for _ in range(N):
    datas.append(int(sys.stdin.readline()))
data = list(map(int, input().split()))

def solution():
    pass

print(solution())