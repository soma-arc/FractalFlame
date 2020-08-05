class RGB{
  float r, g, b;
  RGB(float r, float g, float b){
    this.r = r;
    this.g = g;
    this.b = b;
  }
  
  RGB add(RGB rgb) {
    return new RGB(this.r + rgb.r,
    this.g + rgb.g,
    this.b + rgb.b);
  }
  
  RGB scale(float k){
    return new RGB(this.r * k, this.g * k, this.b * k);
  }
}
