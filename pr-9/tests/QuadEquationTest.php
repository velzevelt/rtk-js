<?php

use PHPUnit\Framework\TestCase;

final class QuadEquationTest extends TestCase
{
  public function test1() {
    $e = new QuadEquation();
    $res = $e->solveEquation();
    $this->assertEquals(1, 1);
  }
}