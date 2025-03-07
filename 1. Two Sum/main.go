package main

import "fmt"

func twoSum(nums []int, target int) []int {
	myMap := make(map[int]int)

	for i, v := range nums {
		if result, exists := myMap[target-v]; exists {
			return []int{result, i}
		}
		myMap[v] = i
	}

	return []int{}
}

func main() {
	arr := twoSum([]int{2, 7, 11, 15}, 9)
	fmt.Printf("%v", arr)
}
