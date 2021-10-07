#include <stdio.h>
#include <stdlib.h>

int euc(int x, int y);

int main()
{
    int x, y;

    do
    {
    printf("Enter integers in decreasing order (separated by a comma) to find the greatest common divisor:\n");
    scanf("%i, %i", &x, &y);
    } while (y > x);

    printf("The greatest common divisor is %i.\n", euc(x, y));
}

int euc(int x, int y)
{
    int z = x % y;
    if (z != 0)
    {
        return (euc(y, z));
    }
    else
    {
        return y;
    }
}
