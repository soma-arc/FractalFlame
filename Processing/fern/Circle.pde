class Circle {
  Complex center;
  float r;
  Circle(float _x, float _y, float _r) {
    center = new Complex(_x, _y);
    r = _r;
  }
  
  void render(float scale) {
    ellipse(center.re * scale, center.im * scale, 
      2 * r * scale, 2 * r * scale);
  }

  Complex invertOnPoint (Complex p) {
    float r2 = r * r;
    Complex d = p.sub(center);
    float lenSq = d.lengthSq();
    return d.mult(r2 / lenSq).add(center);
  }

  Circle invertOnCircle (Circle c) {
    float coeffR = c.r * sqrt(2) / 2;
    Complex p1 = invertOnPoint(c.center.add(new Complex(coeffR, coeffR)));
    Complex p2 = invertOnPoint(c.center.add(new Complex(-coeffR, -coeffR)));
    Complex p3 = invertOnPoint(c.center.add(new Complex(coeffR, -coeffR)));
    return CircleFromPoints(p1, p2, p3);
  }
}

Circle CircleFromPoints (Complex a, Complex b, Complex c) {
  float lA = cdistance(b, c);
  float lB = cdistance(a, c);
  float lC = cdistance(a, b);
  float coefA = lA * lA * (lB * lB + lC * lC - lA * lA);
  float coefB = lB * lB * (lA * lA + lC * lC - lB * lB);
  float coefC = lC * lC * (lA * lA + lB * lB - lC * lC);
  float denom = coefA + coefB + coefC;
  Complex center = new Complex((coefA * a.re + coefB * b.re + coefC * c.re) / denom, 
    (coefA * a.im + coefB * b.im + coefC * c.im) / denom);
  float r = cdistance(center, a);
  return new Circle(center.re, center.im, r);
}
