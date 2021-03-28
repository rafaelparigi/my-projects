#include <stdio.h>
#include <stdlib.h>

int * bubbleSort(int array[], int N);

int main (){
    int n;
    do {
    printf("How many integers in the array? ");
    scanf("%i", &n);
    } while (n < 2);
    int myArray[n];
    printf("Enter the %i unsorted integers separated by ENTER\n", n);
    
    for (int i = 0; i < n; i++) {
        scanf("%i", &myArray[i]);
    }
    
    bubbleSort(myArray, n);
    
    printf("The sorted array is as follows: ");
    for (int i = 0; i < n; i ++)
        printf("%i, ", myArray[i]);
}
    
int * bubbleSort(int array[], int N) {
    int temp;
    for (int i = 0; i < N - 1; i++) {
        for (int j = 0; j < N - 1 - i; j++) {
            if (array[j + 1] < array[j]) {
                temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
