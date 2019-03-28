function inPutYear()
{
    let year = parseInt(document.getElementById("year").value);
    let isLeapYear = false;

    let isDivisibleBy4 = year % 4 == 0;
    if (isDivisibleBy4)
    {
        let isDivisibleBy100 = year % 100 ==0;
        if (isDivisibleBy100)
        {
            let isDisivibleBy400 = year % 400 == 0;
            if (isDisivibleBy400)
            {
                isLeapYear = true;
            }
        }
        else
        {
            isLeapYear = true;
        }
    }

    if (isLeapYear)
    {
        document.write(year + " is a leap year");
    }
    else
    {
        document.write(year + " is NOT a leap year");
    }
}