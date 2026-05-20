t=int(input())
for _ in range(t):
    s=input()
    tong=0 #vị trí chẵn
    tich=1 #vị trí lẻ
    flag=False
    for i in range(len(s)):
        so=int(s[i])
        if (i+1)%2==0:
            tong+=so
        else:
            if so != 0:
                tich*=so
                flag=True
    if flag==False:
        tich=0
    print(tich, tong)