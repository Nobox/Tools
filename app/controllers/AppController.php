<?php

class AppController extends BaseController {

    /**
     * Runs before any other method in this controller
     *
     * @return void
     */
    public function __construct()
    {
        // Run BaseController constructor
        parent::__construct();

        // Set a default page title
        $this->data['pageTitle'] = 'naming convention tool';
    }

    /**
     * Index page
     *
     * @return View
     */
    public function showIndex()
    {
        return View::make('index', $this->data);
    }

    /**
     * Naming Convention Tool page
     *
     * @return View
     */
    public function showNaming()
    {
        $this->data['toolid'] = 'naming';

        $this->data['deptarea'] = [
            [
                'val' => 'DEV',
                'name' => 'Development'
            ],
            [
                'val' => 'SM',
                'name' => 'Social Media'
            ],
            [
                'val' => 'ACC',
                'name' => 'Account Services'
            ],
            [
                'val' => 'HR',
                'name' => 'Human Resources'
            ],
            [
                'val' => 'BUS',
                'name' => 'Business Development'
            ],
            [
                'val' => 'FIN',
                'name' => 'Finance'
            ],
            [
                'val' => 'PRO',
                'name' => 'Production'
            ],
            [
                'val' => 'PR',
                'name' => 'Public Relations'
            ],
            [
                'val' => 'STR',
                'name' => 'Strategy'
            ],
            [
                'val' => 'PLA',
                'name' => 'Planning'
            ],
            [
                'val' => 'MED',
                'name' => 'Media'
            ],
        ];

        $this->data['doctype'] = [
            [
                'val' => 'AD',
                'name' => 'Banner Ad'
            ],
            [
                'val' => 'RM',
                'name' => 'Rich Media Banner'
            ],
            [
                'val' => 'PP',
                'name' => 'Presentation'
            ],
            [
                'val' => 'IG',
                'name' => 'Info-graphic'
            ],
            [
                'val' => 'DOC',
                'name' => 'Documentation'
            ],
            [
                'val' => 'WWW',
                'name' => 'Website Source Code'
            ],
            [
                'val' => 'ME',
                'name' => 'Memo'
            ],
            [
                'val' => 'RR',
                'name' => 'Report'
            ],
            [
                'val' => 'VID',
                'name' => 'Video'
            ],
            [
                'val' => 'PHO',
                'name' => 'Photo'
            ],
            [
                'val' => 'ES',
                'name' => 'Editable Source (psd, fla, ai)'
            ],
            [
                'val' => 'BRI',
                'name' => 'Brief'
            ],
        ];

        $this->data['status'] = [
            [
                'val' => 'O',
                'name' => 'Obsolete'
            ],
            [
                'val' => 'D',
                'name' => 'Draft'
            ],
            [
                'val' => 'C',
                'name' => 'Client Confidential Only'
            ],
            [
                'val' => 'I',
                'name' => 'Internal Only'
            ],
            [
                'val' => 'T',
                'name' => 'Ready to traffic'
            ],
        ];

        asort($this->data['deptarea']);
        asort($this->data['doctype']);
        asort($this->data['status']);

        return View::make('tools', $this->data);
    }

}
