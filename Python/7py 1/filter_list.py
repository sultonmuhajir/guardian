"""
|--------------------------------------------------------------------------
| List Filtering
|--------------------------------------------------------------------------
|
"""

def filter_list(l):
   return list(filter(lambda i: type(i) == int, l))


def filter_list(l):
   return [i for i in l if not isinstance(i, str)]


def filter_list(l):
   return [e for e in l if type(e) is int]


def filter_list(l):
   return [i for i in l if type(i) != str]


print(filter_list([1,2,'a','b']),[1,2])
print(filter_list([1,'a','b',0,15]),[1,0,15])
print(filter_list([1,2,'aasf','1','123',123]),[1,2,123])