<div class="naming">
    <h1>naming convention tool</h1>

    <p>Your filename should be: <span class="filename">AAA-BB-Description_of_the_file-YYYYMMDD-VXX.fileExtension</span></p>

    <label for="deptarea">
        <span>Department or Business Area</span>
        <select name="deptarea" id="deptarea">
        @foreach ($deptarea AS $dept)
            <option value="{{ $dept['val'] }}">{{ $dept['val']." - ".$dept['name'] }}</option>
        @endforeach
        </select>
        <strong><abbr title="required">*</abbr></strong>
    </label>

    <label for="doctype">
        <span>Document Type</span>
        <select name="doctype" id="doctype">
        @foreach ($doctype AS $type)
            <option value="{{ $type['val'] }}">{{ $type['val']." - ".$type['name'] }}</option>
        @endforeach
        </select>
    </label>

    <label for="status">
        <span>Status</span>
        <select name="status" id="status">
        @foreach ($status AS $stat)
            <option value="{{ $stat['val'] }}">{{ $stat['val']." - ".$stat['name'] }}</option>
        @endforeach
        </select>
    </label>

    <label for="desc">
        <span>Description</span>
        <input type="text" name="desc" id="desc" placeholder="Nobox Homepage Hero Image">
        <strong><abbr title="required">*</abbr></strong>
    </label>

    <label for="date">
        <span>Date (YYYYMMDD)</span>
        <input type="text" name="date" id="date" value="{{ date('Ymd') }}" placeholder="{{ date('Ymd') }}">
        <strong><abbr title="required">*</abbr></strong>
    </label>

    <label for="ver">
        <span>Version</span>
        <input type="number" name="ver" id="ver" placeholder="1" value="1" inputmode="numeric" max="99" min="1">
    </label>

    <label for="ext">
        <span>File Extension</span>
        <input type="text" name="ext" id="ext" placeholder=".txt" value=".txt">
    </label>
</div>
