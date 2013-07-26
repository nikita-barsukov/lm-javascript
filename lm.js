
function lm(dt) {

	var data = function(x) {
		if (!arguments.length) return x;
		data = x.slice();
		data.sort(function(a, b) { return a[0] - b[0]; });
		return data;
	};
	 
	var coef = function(d) {
		var sum_x = 0, sum_y = 0,
		sum_xx = 0, sum_xy = 0,
		m, b;
		 
		for (var i = 0; i < d.length; i++) {
			sum_x += d[i][0];
			sum_y += d[i][1];
			 
			sum_xx += Math.pow(d[i][0], 2);
			sum_xy += d[i][0] * d[i][1];
		}
	 
		m = (d.length * sum_xy - sum_x * sum_y) / (d.length * sum_xx - sum_x * sum_x);
		b = (sum_y / d.length) - (m * sum_x) / d.length;

		return {"slope": m, "intercept": b}
	};

	var path = function(d) {		 
		return ;
	};

	this.data_points = data(dt);
	this.coefficients = coef(this.data_points);
	this.func = function (x) {return this.coefficients.slope * x + this.coefficients.intercept};
	this.path = [
			[this.data_points[0][0], this.func(this.data_points[0][0])],
			[this.data_points[this.data_points.length - 1][0], this.func(this.data_points[this.data_points.length - 1][0])]
		];

}
