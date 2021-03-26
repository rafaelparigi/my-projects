#include <stdio.h>
#include <stdlib.h>

int factorial(int f);

int main ()
{
    int n;
    do
    { 
    printf("Calculate the factorial of which positive integer? ");
    scanf("%i", &n);
    } while (n < 1);
    
    printf("%i\n", factorial(n));
}

int factorial(int f)
{
    if (f > 1)
    {
        return f * factorial(f - 1);
    }
    else
    {
        return 1;
    }
}
