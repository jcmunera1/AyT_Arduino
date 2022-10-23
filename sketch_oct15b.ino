#include <binrtttl.h>
#include <pitches.h>
#include <anyrtttl.h>

#include <RBD_LightSensor.h>

const int piezo = 9;
const int light = A1;

int piezoValue = 0;
int lightValue = 0;

void setup()
{
  pinMode(piezo, OUTPUT);
  pinMode(light, INPUT);
  Serial.begin (9600);
}

void loop()
{
  // reads photocell value
  lightValue = analogRead(light);
  Serial.println(lightValue);
  delay(100);

  tone(piezo, lightValue * 10);
  delay(100);
  noTone(piezo);
  delay(100);
 }
