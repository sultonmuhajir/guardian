"""
|--------------------------------------------------------------------------
| Sum of two lowest positive integers
|--------------------------------------------------------------------------
|
"""

def sum_two_smallest_numbers(numbers):
   return sorted(numbers)[0] + sorted(numbers)[1]


def sum_two_smallest_numbers(numbers):
   return sum(sorted(numbers)[:2])


def sum_two_smallest_numbers(numbers):
   return numbers.pop(numbers.index(min(numbers))) + numbers.pop(numbers.index(min(numbers)))


print(sum_two_smallest_numbers([5, 8, 12, 18, 22]), 13)
print(sum_two_smallest_numbers([7, 15, 12, 18, 22]), 19)
print(sum_two_smallest_numbers([25, 42, 12, 18, 22]), 30)