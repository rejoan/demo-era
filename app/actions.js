'use server';
import { createItem } from '@directus/sdk';
import client from '@/lib/directus';
import { redirect } from 'next/navigation';

export async function createApplication(formData) {
  const parking_address = formData.get('parking_address');
  const parking_coordinates = formData.get('parking_coordinates');

  try {
    const newItem = await client.request(
      createItem('applications', {
        parking_address: parking_address,
        parking_coordinates: parking_coordinates
      })
    );
    redirect('/application'); 
  } catch (error) {
    console.error('Error creating item:', error);
  }
}
