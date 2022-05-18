<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function index()
    {
        $accounts = Account::all();
        return response()->json(['accounts'=>$accounts],200);
    }

    public function show(Account $accountId)
    {

        return response()->json(['account'=>$accountId],200);
    }

}
