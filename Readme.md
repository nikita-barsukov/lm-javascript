Simple linear regression model in Javascript.
=============================================

Inspired by this gist https://gist.github.com/tmcw/2879363

Functionality is partly based on `lm()` function from language R.

Usage.
------

Initialize new object of class `lm` and pass a dataset, containing pairs of x - y points. Coefficients, equation of regresison line, coordinates of two points of this line, other parameters of regresison model are calculated at initialization.

h3. Examples:

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

    // X and Y values of regression line
    console.log(linear.path)

    // Regression line function
    f = linear(func)
    
```

Check `index.html` for a full example with scatterplot of random data.
