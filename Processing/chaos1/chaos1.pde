void setup() {
  float x = 2. * (random(1) - 0.5);
  float y = 2. * (random(1) - 0.5);
  int c = 0;

  size(600, 600);
  background(255);
  translate(width/2, height/2);
  for (int i = 0; i < 100000; i++) {
    int n = int(floor(random(3.)));
    if (n == 0) {
      x = x / 2;
      y = y / 2;
    } else if (n == 1) {
      x = (x + 1) / 2;
      y = y / 2;
    } else {
      x = x / 2;
      y = (y + 1) / 2;
    }
    if (c > 20) {
      fill(0);
      stroke(0);
      float scale1 = 500;
      point(x * scale1, y * scale1);
    }
    c++;
  }
}
