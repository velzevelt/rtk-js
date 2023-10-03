<?php

use PHPUnit\Framework\TestCase;

final class QuadEquationTest extends TestCase
{

  public function testInvalidInputString() {
    $e = new QuadEquation('dr', 'gd0', '0yy');
    
    $this->expectException(InvalidArgumentTypeError::class);    
    $res = $e->solveEquation();
    $this->assertFalse($res, 'Ошибка при работе с некорректными данными');
  }


/**
 * @dataProvider solveProvider
 * @testdox Input $a, $b, $c in function results in $expected
 */
  public function testSolve($a, $b, $c, $expected)
  {
      $result = new QuadEquation($a, $b, $c);
      $result = $result->solveEquation();
      $this->assertSame($expected, $result);
  }
  
  public static function solveProvider()
  {
      return [
          [-1, 7, 8, [-1, 8]],
          [3, 0, -27, [3, -3]],
          [1, 1, 0, [0, -1]],
          [1, 0, 0, [0]],
          [1, 1, 1, false],
          ['0', '0', '0', false],
          
      ];
  }

}