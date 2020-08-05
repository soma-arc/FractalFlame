class TwoCircles {
  Circle c1, c2, c1d;
  TwoCircles(Circle c1, Circle c2) {
    this.c1 = c1;
    this.c2 = c2;
    update();
  }

  void update() {
    c1d = this.c2.invertOnCircle(this.c1);
  }
  
  void render(float scale) {
    fill(0, 0, 255);
    c1d.render(scale);
    fill(0, 255, 0);
    c2.render(scale);
    fill(255, 0, 0);
    c1.render(scale);
  }
  
  Complex applyGen(Complex p){
    Complex pd = this.c1.invertOnPoint(p);
    Complex pdd = this.c2.invertOnPoint(pd);
    return pdd;
  }
  
  Complex applyInvGen(Complex p){
    Complex pd = this.c2.invertOnPoint(p);
    Complex pdd = this.c1.invertOnPoint(pd);
    return pdd;
  }
}
