import math
n = int(input())
a = list(map(int, input().split()))
snt = []  
chiso = []  
for index, i in enumerate(a):
    prime = True
    if i < 2:
        prime = False
    elif i > 3:
        x = int(math.sqrt(i)) + 1
        for j in range(2, x):
            if i % j == 0:
                prime = False
                break
    if prime == True:
        snt.append(i)
        chiso.append(index)
        a[index] = -1
k = sorted(snt) 
for p in range(len(k)):
    phantu = k[p]
    id = chiso[p]
    a[id] = phantu
print(*a)