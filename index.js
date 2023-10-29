
var flag = true;
function clac ( s )
{
    var d = document.querySelector( "#num3" );
    d.value = s;
    flag = false;
}
function click1 ( num )
{
    if ( flag )
    {
        var num1 = document.querySelector( "#num1" );
        num1.value += num;
    } else
    {
        var num2 = document.querySelector( "#num2" );
        num2.value += num;
    }

}

function result ()
{
    var num1 = parseInt( document.querySelector( "#num1" ).value );
    var num2 = parseInt( document.querySelector( "#num2" ).value );
    var span_ = document.querySelectorAll( 'span' )
    var h1_ = document.querySelectorAll( 'h1' )
    // console.log( h1 );
    // console.log( span_ );
    var d = document.querySelector( "#num3" ).value;
    switch ( d )
    {
        case '+':
            alert( num1 + num2 );
            break;
        case '-':
            alert( num1 - num2 );
            break;
        case '*':
            alert( num1 * num2 );
            break;
        case '/':
            alert( num1 / num2 );
            break;
        default:
            alert( "输入有误" )
            break;
    }
    if ( num1 == 1 && num2 == 1 )
    {
        span_[ 0 ].innerHTML = '一'

    }
    if ( num1 == 1 && num2 == 2 )
    {
        span_[ 1 ].innerHTML = '加'

    }
    if ( num1 == 1 && num2 == 3 )
    {
        span_[ 2 ].innerHTML = '十'

    }
    if ( num1 == 1 && num2 == 5 )
    {
        span_[ 3 ].innerHTML = '周'

    }
    if ( num1 == 1 && num2 == 6 )
    {
        span_[ 4 ].innerHTML = '年'

    }
    if ( num1 == 1 && num2 == 7 )
    {
        span_[ 5 ].innerHTML = '快'

    }
    if ( num1 == 1 && num2 == 8 )
    {
        span_[ 6 ].innerHTML = '乐'

    }
    if ( num1 == 1 && num2 == 9 )
    {
        h1_[ 0 ].innerHTML = '总有故事，被影像看见。向新而生'
    }
    if ( num1 == 1 && num2 == 10 )
    {
        h1_[ 1 ].innerHTML = '10至名归'
    }
    if ( num1 == 1 && num2 == 11 )
    {
        h1_[ 2 ].innerHTML = '优雅处，见实力'
    }
    if ( num1 == 1 && num2 == 12 )
    {
        h1_[ 3 ].innerHTML = '日出东方，敬请期待'
    }
    if ( num1 == 1 && num2 == 521 )
    {
        h1_[ 4 ].innerHTML = 'Never Settle'
    }

}
function click2 ()
{
    document.querySelector( "#num1" ).value = "";
    document.querySelector( "#num2" ).value = "";
    document.querySelector( "#num3" ).value = "";
}

