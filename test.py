from heapq import heappush, heappop, heappushpop, heapreplace

heap = [2, 1, 3, 4, 6, 7, 8, 9]

test = heappushpop(heap, 5)
# test = heapreplace(heap, 5)
print(heap, test)
