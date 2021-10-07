#include <stdio.h>
#include <stdlib.h>

int * mergeSort(int array[], int arraySize);

int main () {
    int n;

    do {
    printf("How many integers in the array? ");
    scanf("%i", &n);
    } while (n < 1);

    int myArray[n];
    printf("Enter the %i unsorted integers separated by ENTER\n", n);

    for (int i = 0; i < n; i++) {
        scanf("%i", &myArray[i]);
    }

    mergeSort(myArray, n);

    printf("The sorted array is as follows: ");
    for (int i = 0; i < n; i ++)
    {
        printf("%i, ", myArray[i]);
    }
}

int * mergeSort(int array[], int arraySize) {
    const int leftSize = arraySize / 2;
    const int rightSize = (arraySize + 1) / 2;
    if (arraySize == 1) {
        return array;
    }

    int leftHalf[arraySize / 2];
    for (int i = 0; i < arraySize / 2; i++) {
        leftHalf[i] = array[i];
    }

    int rightHalf[(arraySize + 1) / 2];
    for (int i = 0; i < (arraySize + 1) / 2; i++) {
        rightHalf[i] = array[(arraySize/2) + i];
    }

    int * sortedLeftHalf = mergeSort(leftHalf, leftSize);
    int * sortedRightHalf = mergeSort(rightHalf, rightSize);

    int leftIndex = 0;
    int rightIndex = 0;

    while (leftIndex < arraySize/2 || rightIndex < (arraySize + 1) / 2) {
        if (leftIndex >= arraySize/2) {
            array[leftIndex + rightIndex] = sortedRightHalf[rightIndex];
            rightIndex++;
        }
        else if (rightIndex >= (arraySize + 1) / 2) {
            array[leftIndex + rightIndex] = sortedLeftHalf[leftIndex];
            leftIndex++;
        }
        else if (sortedLeftHalf[leftIndex] < sortedRightHalf[rightIndex]) {
            array[leftIndex + rightIndex] = sortedLeftHalf[leftIndex];
            leftIndex++;
        }
        else {
            array[leftIndex + rightIndex] = sortedRightHalf[rightIndex];
            rightIndex++;
        }
    }
    return array;
    
}
