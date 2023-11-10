<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
  public function index() 
  {
    return inertia('Main', []);
  }

  public function catalog() 
  {
    return inertia('Catalog', []);
  }
}
