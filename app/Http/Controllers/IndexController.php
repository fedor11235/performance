<?php

namespace App\Http\Controllers;

use App\Models\Catalog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
  public function index() 
  {
    $catalog = new Catalog();

    return inertia('Main', [
      'catalog'=>$catalog
    ]);
  }

  public function catalog() 
  {
    $catalog = new Catalog();
    // $catalog = DB::table('catalog')->select('title', 'text')->get();
    return inertia('Catalog', [
      'catalog'=>$catalog
    ]);
  }
}
