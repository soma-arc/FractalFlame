float x = 2. * (random(1) - 0.5);
float y = 2. * (random(1) - 0.5);
TwoCircles circles = new TwoCircles(new Circle(-.3, -0.5, 0.5), new Circle(-0.5, -0.3, 0.8));

void setup() {
  int c = 0;
  float scale1 = 200;

  size(1024, 1024);
  background(0);
  translate(width/2, height/2);
  //circles.render(scale1);

  stroke(255, 0, 0);
  noFill();
  //rect(-1 * scale1, -1 * scale1, 2 * scale1, 2 * scale1);

  for (int i = 0; i < 100000; i++) {
    int n = int(floor(random(4.)));
    //println(n);
    fill(255);
    stroke(255);
    if (n == 0) {
      V0(x, y, .2, 0, .4, .2, 0, .2);
      P0(x, y, 1, 0, 0.1, 0, 1, 0);
      stroke(255, 0, 0);
    } else if (n == 1) {
      V3(x, y, 1., .7, 1, 0.5, .5, .3);
      P0(x, y, 1, 0, 0, 0.3, 1, 0);
      stroke(0, 0, 255);
    } else if (n == 2) {
      V4(x, y, 1, .2, .2, 0, .4, 0);
      P0(x, y, 1, 0, 0, 0, 1, 0.1);
      stroke(0, 255, 255);
    } else if (n == 3) {
      V2(x, y, 1, .2, .2, 0, .4, 0);
      //P0(x, y, 1, 0, 0, 0, 1, 0);
      mobius(x, y, 1, .2, .2, 0, .4, 0);
      stroke(0, 255, 0);
    }
    
    F0(x, y, 1, 0, 0, 0, 1, 0);
    //mobius(x, y, 1, 0, 0, 0, 1, 0);

    if (c > 20) {
      point(x * scale1, y * scale1);
      //println(x * scale1);
    }
    c++;
  }
}

void V0(float xx, float yy, float a, float b, float c, float d, float e, float f) {
  float xv = a*xx + b*yy + c;
  float yv = d*xx + e*yy + f;
  x = xv;
  y = yv;
}

void V1(float xx, float yy, float a, float b, float c, float d, float e, float f) {
  float xv = a*xx + b*yy + c;
  float yv = d*xx + e*yy + f;
  x = sin(xv);
  y = sin(yv);
}

void V2(float xx, float yy, float a, float b, float c, float d, float e, float f) {
  float xv = a*xx + b*yy + c;
  float yv = d*xx + e*yy + f;
  float r = sqrt(xv * xv + yv * yv);
  float r2 = r * r;
  x = xv/r2;
  y = yv/r2;
}

void V3(float xx, float yy, float a, float b, float c, float d, float e, float f) {
  float xv = a*xx + b*yy + c;
  float yv = d*xx + e*yy + f;
  float r = sqrt(xv * xv + yv * yv);
  float r2 = r * r;
  x = xv * sin(r2) - yv * cos(r2);
  y = xv * cos(r2) + yv * sin(r2);
}

void V4(float xx, float yy, float a, float b, float c, float d, float e, float f) {
  float xv = a*xx + b*yy + c;
  float yv = d*xx + e*yy + f;
  float r = sqrt(xv * xv + yv * yv);
  x = ((xv - yv)*(xv + yv))/r;
  y = 2 * xv * yv / r;
}

void P0(float xx, float yy, float a, float b, float c, float d, float e, float f) {
  float xv = a*xx + b*yy + c;
  float yv = d*xx + e*yy + f;
  x = xv;
  y = yv;
}

void F0(float xx, float yy, float a, float b, float c, float d, float e, float f) {
  float xv = a*xx + b*yy + c;
  float yv = d*xx + e*yy + f;
  x = xv;
  y = yv;
}

void mobius(float xx, float yy, float a, float b, float c, float d, float e, float f) {
  float xv = a*xx + b*yy + c;
  float yv = d*xx + e*yy + f;
  Complex p = new Complex(xv, yv);
  if (cdistance(p, circles.c1.center) < circles.c1.r) {
    p = circles.c1.invertOnPoint(p);
    p = circles.c2.invertOnPoint(p);
  } else if (cdistance(p, circles.c1d.center) >= circles.c1d.r) {
    p = circles.c2.invertOnPoint(p);
    p = circles.c1.invertOnPoint(p);
  }
  x = p.re;
  y = p.im;
}
