//Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

//We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

//You must solve this problem without using the library's sort function

//Example 1
//Input: nums = [2,0,2,1,1,0]
//Output: [0,0,1,1,2,2]

//Constraints
//n == nims.length
//1<= n <= 300
//nims[i] is either 0,1, or 2



#include <iostream>
using namespace std;

//swap function
void swap(int nums[],int x, int y){
    int temp = nums[x];
    nums[x]= nums[y];
    nums[y] = temp;
}

//min number in array
int locOfSmallest(int nums[], int s, int e){
    int i = s;
    int j = i;
    while(i<=e){
        if(nums[i]< nums[j])
        {
            j=i;
        }
    i++;
    }
    return j;
}

//selection sort
void selSort(int nums[], int n){
    int i = 0 ;
    while(i<n-1){
        int j = locOfSmallest(nums,i,n-1);
        swap(nums,i,j);
        i++;
    }
}

//display
void display(int nums[], int n){
    int i = 0;
    while (i<n){
        cout<<nums[i]<<",";
        i++;
    }
    cout<<endl;
}


int main(){

    int nums [] = {1,2,1,2,0,0,2,1,0,2};
    int size = sizeof(nums)/sizeof(int);

    display(nums,size);
    selSort(nums, size);
    display(nums,size);

    return 0;
}
