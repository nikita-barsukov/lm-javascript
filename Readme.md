Simple linear regression model in Javascript.
=============================================

Inspired by this gist https://gist.github.com/tmcw/2879363

Functionality is partly based on `lm()` function from language R.

Usage.
------

```
	// Creating test data
    var dataset = [];
    var reference_function = function(x) {
        2 * x + 16 + Math.random() * 10
    };
    for(var i = 0; i < 250; i++){
        var x = reference_function(i);
        dataset.push[i, x];
    };

    var linear = new lm(dataset);

    // Slope and intercept
    console.log(linear.coefficients)

    // Array of residual errors
    console.log(linear.residual_errors)

    // X and Y values of regression line
    console.log(linear.path)

    // Regression line function
    f = linear(func)
    
```

Check `index.html` for a full example with scatterplot of random data.
