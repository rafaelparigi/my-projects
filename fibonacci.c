#include <stdio.h>
#include <stdlib.h>

int fibonacci(int n);

int main ()
{
    int n;
    printf("Print Fibonacci until the nth element:");
    scanf("%i", &n);
    
    for (int i = 0; i < n; i++)
    {
        printf("%i, ", fibonacci(i + 1));
    }
    printf("\n");
}

int fibonacci(int n)
{
    if (n == 1 || n == 2)
    {
        return 1;
    }
    else
    {
        return (fibonacci(n - 1) + fibonacci(n - 2));
    }
}
