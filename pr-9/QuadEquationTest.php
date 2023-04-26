<?php
require_once 'vendor/autoload.php';

use PHPUnit\Framework\TestCase as TestCase;

final class QuadEquationTest extends TestCase
{
    public function testValidCalculation()
    {
        $eq = new QuadEquation(1, -2, 3).solveEquation();
        $solve = [-1, 3];
        $this->assertSame($eq, $solve);
    }
}