<?php

/**
 * Environment Variables
 *
 * Local settings are set through environment variables. When running app
 * locally they are defined here. On Forge they are defined through its interface.
 * Remember that these settings reflect either your installed database or
 * the database on Homestead, depending on where you are running the app.
 */

return array(
    // Default database settings in a Homestead VM
    'DB_HOST' => 'localhost',
    'DB_NAME' => 'homestead',
    'DB_USER' => 'homestead',
    'DB_PASSWORD' => 'secret',

    // Local 32 character string encryption key
    'ENCRYPTION_KEY' => 'x3v7F5JCcq0L1Tf7HIHL1oGNb1J9YY5V'
);
