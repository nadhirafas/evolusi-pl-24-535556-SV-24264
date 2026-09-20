<?php

namespace App\Http\Controllers;

use App\Models\Tugas;
use Illuminate\Http\Request;

class TugasController extends Controller
{
    public function index()
    {
        return view('tugas.index', [
            'tugas' => Tugas::all()
        ]);
    }

    public function create()
    {
        return view('tugas.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nama' => 'required',
            'deskripsi' => 'nullable',
        ]);

        Tugas::create($data);

        return redirect()->route('tugas.index');
    }

    public function edit(Tugas $tuga)
    {
        return view('tugas.edit', [
            'tugas' => $tuga
        ]);
    }

    public function update(Request $request, Tugas $tuga)
    {
        $data = $request->validate([
            'nama' => 'required',
            'deskripsi' => 'nullable',
        ]);

        $tuga->update($data);

        return redirect()->route('tugas.index');
    }

    public function destroy(Tugas $tuga)
    {
        $tuga->delete();

        return redirect()->route('tugas.index');
    }
}