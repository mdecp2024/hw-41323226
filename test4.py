import math

# 初始細菌數量
N0 = 100
# 目標數量
N_target = 50000
# 每三小時數量增加一倍，求增長常數 k
k = math.log(2) / 3

# 解出達到目標數量所需的時間 t
t = math.log(N_target / N0) / k

print(f"細菌數量首次達到 50000 人的時間是 {t:.2f} 小時")
