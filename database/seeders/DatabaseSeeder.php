<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Service;
use App\Models\Appointment;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $barber = User::create([
            'name' => 'Barber Adam',
            'email' => 'barber@example.com',
            'password' => bcrypt('password'),
            'phone' => '123456789',
            'roles' => ['barber'],
        ]);

        $client = User::create([
            'name' => 'Klient Pawel',
            'email' => 'client@example.com',
            'password' => bcrypt('password'),
            'phone' => '987654321',
            'roles' => ['customer'],
        ]);

        $service = Service::create([
            'name' => 'Strzyżenie męskie',
            'description' => 'Klasyczne strzyżenie',
            'price' => 80.00,
            'duration_minutes' => 45,
        ]);

        Appointment::create([
            'user_id' => $client->id,
            'barber_id' => $barber->id,
            'service_id' => $service->id,
            'start_time' => now(),
            'end_time' => now()->addMinutes(45),
            'status' => 'scheduled',
        ]);
    }
}
