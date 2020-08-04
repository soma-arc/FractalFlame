float x = 2. * (random(1) - 0.5);
float y = 2. * (random(1) - 0.5);
TwoCircles circles = new TwoCircles(new Circle(-.3, -0.3, 0.5), new Circle(-0.5, -0.3, 0.8));

void setup() {
  int c = 0;
  float scale1 = 100;

  size(1024, 1024);
  background(0);
  translate(width/2, height/2 + 500);
  scale(1, -1);
  //circles.render(scale1);


  stroke(255, 0, 0);
  noFill();
  //rect(-1 * scale1, -1 * scale1, 2 * scale1, 2 * scale1);

  for (int i = 0; i < 1000000; i++) {
    int n = int(floor(random(100)));
    //println(n);
    fill(255);
    stroke(255);
    if (n < 1) {
      V0(x, y, 0, 0, 0, 0, 0.16, 0);
      stroke(255, 0, 0);
    } else if (1 <= n && n < 8) {
      V0(x, y, 0.2, -0.26, 0, 0.23, 0.22, 1.6);
      stroke(0, 0, 255);
    } else if (n <= 8 && n < 15) {
      V0(x, y, -0.15, 0.28, 0, 0.26, 0.24, 0.44);
      stroke(0, 255, 255);
    } else {
      V0(x, y, 0.85, 0.04, 0, -0.04, 0.85, 1.6);
      stroke(0, 255, 0);
    }

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

void pInv(float xx, float yy, float a, float b, float c, float d, float e, float f) {
  float xv = a*xx + b*yy + c;
  float yv = d*xx + e*yy + f;
  Complex result = circles.applyInvGen(new Complex(xv, yv));
  x = result.re;
  y = result.im;
}
