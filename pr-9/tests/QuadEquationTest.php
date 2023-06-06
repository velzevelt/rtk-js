<?php

use PHPUnit\Framework\TestCase;

final class QuadEquationTest extends TestCase
{
  public function testFullEq() {
    $e = new QuadEquation(-1, 7, 8);
    $res = $e->solveEquation();
    
    $this->assertCount(2, $res, 'Ошибка при решении полного квадратного уравнения');
    $this->assertContainsEquals(-1, $res, 'Ошибка при решении полного квадратного уравнения');
    $this->assertContainsEquals(8, $res, 'Ошибка при решении полного квадратного уравнения');
  }

  public function testBZero() {
    $e = new QuadEquation(3, 0, -27);
    $res = $e->solveEquation();
    
    $this->assertCount(2, $res, 'Ошибка при решении квадратного уравнения b=0');
    $this->assertContainsEquals(3, $res, 'Ошибка при решении квадратного уравнения b=0');
    $this->assertContainsEquals(-3, $res, 'Ошибка при решении квадратного уравнения b=0');
  }

  public function testCZero() {
    $e = new QuadEquation(1, 1, 0);
    $res = $e->solveEquation();
    
    $this->assertCount(2, $res, 'Ошибка при решении квадратного уравнения c=0');
    $this->assertContainsEquals(0, $res, 'Ошибка при решении квадратного уравнения c=0');
    $this->assertContainsEquals(-1, $res, 'Ошибка при решении квадратного уравнения c=0');
  }

  public function testBCZero() {
    $e = new QuadEquation(1, 0, 0);
    $res = $e->solveEquation();
    
    $this->assertCount(1, $res, 'Ошибка при решении квадратного уравнения b=0 c=0');
    $this->assertContainsEquals(0, $res, 'Ошибка при решении квадратного уравнения b=0 c=0');
  }

  public function testAZero() {
    $e = new QuadEquation(0, 1, 1);
    $res = $e->solveEquation();
    
    $this->assertCount(1, $res, 'Ошибка при решении уравнения a=0');
    $this->assertContainsEquals(-1, $res, 'Ошибка при решении уравнения a=0');
  }

  public function testInvalidInputAllOne() {
    $e = new QuadEquation(1, 1, 1);
    $res = $e->solveEquation();

    $this->assertFalse($res, 'Ошибка при работе с некорректными данными');
  }

  public function testInvalidInputAllStringZero() {
    $e = new QuadEquation('0', '0', '0');
    
    $res = $e->solveEquation();
    $this->assertFalse($res, 'Ошибка при работе с некорректными данными');
  }

  public function testInvalidInputString() {
    $e = new QuadEquation('dr', 'gd0', '0yy');
    
    $this->expectException(InvalidArgumentTypeError::class);    
    $res = $e->solveEquation();
    $this->assertFalse($res, 'Ошибка при работе с некорректными данными');
  }

}