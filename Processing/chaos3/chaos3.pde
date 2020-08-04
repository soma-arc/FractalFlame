float tmpX;
float tmpY;
void setup() {
  float x = 2. * (random(1) - 0.5);
  float y = 2. * (random(1) - 0.5);
  int c = 0;
  float scale1 = 200; 

  size(1200, 1200);
  background(0);
  translate(width/2, height/2);

  stroke(255, 0, 0);
  noFill();
  //rect(-1 * scale1, -1 * scale1, 2 * scale1, 2 * scale1);

  for (int i = 0; i < 1000000; i++) {
    int n = int(floor(random(3.)));
    if (n == 0) {
      V0(x, y, .2, 0, .4, .2, 0, .2);
      x = tmpX;
      y = tmpY;
    } else if (n == 1) {
      V4(x, y, 1., .7, 1, 0.5, .5, .3);
      x = tmpX;
      y = tmpY;
    } else {
      V3(x, y, 1, .2, .2, 0, .4, 0);
      x = tmpX;
      y = tmpY;
    }
    if (c > 20) {
      fill(255);
      stroke(255);
      point(x * scale1, y * scale1);
    }
    c++;
  }
}

void V0(float x, float y, float a, float b, float c, float d, float e, float f) {
  float xv = a*x + b*x + c;
  float yv = d*x + e*y + f;
  tmpX = xv;
  tmpY = yv;
}

void V1(float x, float y, float a, float b, float c, float d, float e, float f) {
  float xv = a*x + b*x + c;
  float yv = d*x + e*y + f;
  tmpX = sin(xv);
  tmpY = sin(yv);
}

void V2(float x, float y, float a, float b, float c, float d, float e, float f) {
  float xv = a*x + b*x + c;
  float yv = d*x + e*y + f;
  float r = sqrt(xv * xv + yv * yv);
  float r2 = r * r;
  tmpX = xv/r2;
  tmpY = yv/r2;
}

void V3(float x, float y, float a, float b, float c, float d, float e, float f) {
  float xv = a*x + b*x + c;
  float yv = d*x + e*y + f;
  float r = sqrt(xv * xv + yv * yv);
  float r2 = r * r;
  tmpX = xv * sin(r2) - yv * cos(r2);
  tmpY = xv * cos(r2) + yv * sin(r2);
}

void V4(float x, float y, float a, float b, float c, float d, float e, float f) {
  float xv = a*x + b*x + c;
  float yv = d*x + e*y + f;
  float r = sqrt(xv * xv + yv * yv);
  tmpX = ((xv - yv)*(xv + yv))/r;
  tmpY = 2 * xv * yv / r;
}
