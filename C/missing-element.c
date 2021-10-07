#include <stdio.h>
#include <stdlib.h>

int * mergeSort(int array[], int arraySize);

int main() {
    int N;
    printf("Let's find the missing element in a given permutation.\nConsiderations:\n - Size N of the array is an integer within the range [0..100,000];\n - The elements of the array are all distinct;\n - Each element of the array is an integer within the range [1..(N + 1)].\n - Enter the size of the array: ");
    scanf("%i", &N);
    int A[N];
    printf("Enter the elements of the array of consecutive elements with a missing element in any order\n");
    for (int i = 0; i < N; i++) {
        printf("Element #%i: ", i + 1);
        scanf("%i", &A[i]);
    }
    
    mergeSort(A, N);
    
    if (N == 0 || A[0] != 1) {
        printf("The missing element is: %i", 1);
        return 1;
    }

    else if (A[N -1] != N + 1) {
        printf("The missing element is: %i", N + 1);
        return N + 1;
    }

    else if (N == 1) {
        printf("The missing element is: %i", 2);
        return 2;
    }

    else {
        for (int i = 1; i <= N + 1; i++) {
            if (A[i] != A[i - 1] + 1) {
                printf("The missing element is: %i", A[i] - 1);
                return A[i] - 1;
            }
        }
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
