#include <stdio.h>
#include <stdlib.h>

int * selectionSort(int array[], int n);

int main (){
    int n, temp;

    do{
    printf("How many integers in the array? ");
    scanf("%i", &n);
    } while (n < 1);

    int myArray[n];
    printf("Enter the %i unsorted integers separated by ENTER\n", n);

    for (int i = 0; i < n; i++){
        scanf("%i", &myArray[i]);
    }

    selectionSort(myArray, n);

    printf("The sorted array is as follows: ");
    for (int i = 0; i < n; i ++)
    {
        printf("%i, ", myArray[i]);
    }
}

int * selectionSort(int array[], int n){
    int smallest, temp, indexOfSmallest;
    for (int i = 0; i < n - 1; i++)
    {
        indexOfSmallest = i;
        for (int j = i; j < n - 1; j++){
            if (array[j + 1] < array[indexOfSmallest]){
                indexOfSmallest = j + 1;
            }
        }
        temp = array[i];
        array[i] = array[indexOfSmallest];
        array[indexOfSmallest] = temp;
    }
    return array;
}
